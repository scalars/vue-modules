<template>
  <div class="item-card" :class="{ alt }">
    <div class="meta">
      <div class="photo" :style="'background-image: url(' + image + ')'" />
    </div>
    <div class="description">
      <h1>
        <a :href="redirect">{{ title }}</a>
      </h1>
      <div class="description-text" v-html="description" />
      <div class="read-more">
        <a :href="redirect">{{ readMoreLabel }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item-card",
  props: {
    title: { required: true, type: String },
    description: { required: true, type: String },
    redirect: { required: true, type: String },
    image: { required: true, type: String },
    readMoreLabel: { default: "Ver mas", type: String },
    alt: { default: false, type: Boolean }
  }
};
</script>

<style lang="scss" scoped>
$primary: red;
$light-primary: orange;

.item-card {
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 7px -1px rgba(#000, 0.3);
  line-height: 1.4;
  background: var(--primary, $primary);
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  color: white;
  max-width: 500px;

  a {
    color: inherit;
    &:hover {
      color: var(--light-primary, $light-primary);
    }
  }
  &:hover {
    .photo {
      transform: scale(1.3) rotate(3deg);
    }
  }
  .meta {
    position: relative;
    z-index: 0;
    height: 200px;
  }
  .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.2s;
  }
  .description {
    padding: 1rem;
    background: var(--primary, $primary);
    position: relative;
    z-index: 1;
    h1 {
      line-height: 1;
      margin: 6% 0;
      font-size: 1.6em;
      font-weight: 300;
      text-transform: uppercase;
      color: var(--light-primary, $light-primary);
    }
    .description-text {
      /deep/ * {
        color: white !important;
      }
      max-height: 150px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .read-more {
      margin: 6% 0;
      text-align: right;
      a {
        color: var(--light-primary, $light-primary);
        display: inline-block;
        position: relative;

        &:hover {
          margin-left: -5px;
          opacity: 1;
        }
      }
    }
  }
  p {
    position: relative;
    margin: 1rem 0 0;
    &:first-of-type {
      margin-top: 1.25rem;
      &:before {
        content: "";
        position: absolute;
        height: 5px;
        background: var(--light-primary, $light-primary);
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
      }
    }
  }
  &:hover {
    .details {
      left: 0%;
    }
  }

  @media screen and (max-width: 550px) {
    min-width: calc(90vw);
  }
  @media screen and (max-width: 700px) and (min-width: 530px) {
    min-width: 500px;
  }
  @media screen and (min-width: 991px) {
    flex-direction: row;
    max-width: none;
    .meta {
      flex-basis: 40%;
      height: auto;
    }
    .description {
      flex-basis: 60%;
      &:before {
        transform: skewX(-3deg);
        content: "";
        background: var(--primary, $primary);
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }
    &.alt {
      flex-direction: row-reverse;
      .description {
        &:before {
          left: inherit;
          right: -10px;
          transform: skew(3deg);
        }
      }
      .details {
        padding-left: 25px;
      }
    }
  }
}
</style>
