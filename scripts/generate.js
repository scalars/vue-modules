const program = require('commander');
const path = require('path');
const fs = require('fs');
const mustache = require('mustache');
program.version('0.0.1');

program
    .requiredOption('-c, --component <string>', 'Nombre del componente a crear');
program.parse(process.argv);

// FUNCTIONS

const getNames = (name, separator = '-') => {
    const pascalCase = name.replace(/^[a-z]/, (char) => char.toUpperCase());
    const kebabCase = name.replace(/[A-Z]/g,
        (char, index) => index > 0 ? `${separator}${char.toLowerCase()}` : char.toLowerCase()
    );
    return {
        component_name: pascalCase,
        kebab_component_name: kebabCase
    }
};

const getPathAndComponentName = (component) => {
    let folder = component.split('/');
    const name = folder.pop();
    if (folder.length > 0) {
        folder = folder.join('/');
    } else {
        folder = '.';
    }
    return { path: folder, name };
};

const getRendersMustache = (files, variables) => {
    return files.map((file) => {
        const fileObject = fs.readFileSync(file.path, 'utf-8');
        return {
            ...file,
            template: mustache.render(fileObject, variables)
        };
    });
};

const generateProject = (projectPath, projectName, templateFilesPath, mustacheRenderedFiles) => {
    const projectFolder = path.resolve(projectPath, projectName);
    if (fs.existsSync(projectFolder)) {
        throw new Error(`Project ${projectFolder} already exists`);
    }
    fs.mkdirSync(path.resolve(projectPath, projectName), { recursive: true });
    const templateFiles = fs.readdirSync(templateFilesPath);
    templateFiles.forEach((file) => fs.copyFileSync(
        path.resolve(templateFilesPath, file), path.resolve(projectFolder, file)
    ));
    fs.mkdirSync(path.resolve(projectPath, projectName, 'src'));
    mustacheRenderedFiles.forEach(file => fs.writeFileSync(path.resolve(projectFolder, file.copyPath), file.template))
};

const generateStory = (storyTemplate, folderStorybook, folderProject, component, names) => {
    fs.mkdirSync(folderStorybook, { recursive: true });
    const templateFile = fs.readFileSync(storyTemplate, 'utf-8');
    const renderedTemplate = mustache.render(templateFile, {
        ...names,
        component_path: component.path,
        relative_path: path.relative(folderStorybook, folderProject)
    });
    fs.writeFileSync(path.resolve(folderStorybook, `${names.kebab_component_name}.stories.ts`), renderedTemplate);
};

try {
    const COMPONENTS_PATH = path.resolve(__dirname, '..', 'packages/components');
    const STORIES_PATH = path.resolve(__dirname, '..', 'packages/storybook/stories');

    const componentName = program.component;
    const component = getPathAndComponentName(componentName);
    if (!component.name.match(/^[a-zA-Z]+$/)) {
        console.error('The component name must use camelcase syntax');
        process.exit(1);
    }
    const names = getNames(component.name);

    const resourcesPath = path.resolve(__dirname, 'resources');
    const pathMustacheFiles = path.resolve(resourcesPath, 'mustache');
    const pathTemplateFiles = path.resolve(resourcesPath, 'template');
    const storyTemplate = path.resolve(pathMustacheFiles, 'component.stories.mst');
    const mustacheFiles = [
        {
            path: path.resolve(pathMustacheFiles, 'component.mst'),
            copyPath: `src/${names.component_name}.vue`
        },
        {
            path: path.resolve(pathMustacheFiles, 'main.mst'),
            copyPath: `src/main.js`
        },
        {
            path: path.resolve(pathMustacheFiles, 'package.mst'),
            copyPath: 'package.json'
        },
        {
            path: path.resolve(pathMustacheFiles, 'index.d.mst'),
            copyPath: 'index.d.ts'
        }
    ];

    const mustacheRenderedFiles = getRendersMustache(mustacheFiles, names);

    const projectPath = path.resolve(COMPONENTS_PATH, component.path);
    generateProject(projectPath, names.kebab_component_name, pathTemplateFiles, mustacheRenderedFiles);
    const storyPath = path.resolve(STORIES_PATH, component.path);
    generateStory(storyTemplate, storyPath, projectPath, component, names);
} catch (err) {
    console.log(err.message);
    process.exit(1);
}
