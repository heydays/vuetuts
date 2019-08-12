<template>
  <div class="container">
    <h1 class="title">Bindings</h1>
    <br>
    <h2 class="subtitle">What is it?</h2>
    <p>Bindings are the way how js is bound to html dynamically.
      <br>
      We need this in the most scenarios for adding and updating
      informations around the DOM with the magic of reactivity.</p>
    <br>
    <p>This means that, if vue notices a data change and found an element which is bound to this specific data,
      <br>
      it will update the element, but without rerender the whole page. It just updates/render the element or component you want to update.</p>
    <br>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="subtitle">Type in the input field</p>
          <div class="content">
            <input type="text" id="input" v-model="message"/>
            <br>
            <div>{{message}}</div>
            <div>{{messageTwo}}</div>
          </div>
        </article>
        <article class="tile is-child notification is-warning">
          <p class="subtitle">Or list rendering with item attachment</p>
          <div class="content">
            <ul>
              <li v-for="name in names" :key="name">
                {{name}}
              </li>
            </ul>
            <input type="text" v-model="newName"/>
            <button @click.prevent="addName">Add name</button>
          </div>
        </article>
        <article class="tile is-child notification is-info">
          <p class="subtitle">Attribute and Class bindings</p>
          <div class="content">
            <button :title="title">Hover over me</button>
            <br>
            <button class="is-uppercase" @click="changeClass">Change color class below</button>
            <div class="color-yellow" :class="{'color-dark': isChanged}">Class binding, color-yellow</div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        message: 'Change me',
        messageTwo: 'This text is just bound',
        names: ['Joe', 'Marie', 'Jack'],
        newName: '',
        title: 'Iam a title for the button.',
        isChanged: false
      }
    },
    methods: {
      addName () {
        this.names.push(this.newName)
        this.newName = ''
      },
      changeClass () {
        // simple toggle
        this.isChanged === false ? this.isChanged = true : this.isChanged = false
      }
    }
  }
</script>
<style lang="scss">
  .color-yellow {
    color: #ffff00;
  }
  .color-dark {
    color: #000000;
  }
</style>