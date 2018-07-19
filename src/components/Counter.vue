<template>
  <Page class="page">
    <ActionBar class="action-bar"
      title="FIRESTORE">
      <NavigationButton text="Go Back"
        android.systemIcon="ic_menu_back"
        @tap="$router.push('/home')" />
    </ActionBar>

    <StackLayout class="hello-world">
      <Label class="body"
        textWrap=true
        text="This is a hello world component, tap the button if you dare" />

      <Button class="btn btn-primary"
        @tap="getData"
        text="get" />
      <!-- <Button class="btn btn-primary"
        @tap="pushData"
        text="pushData" /> -->

    </StackLayout>

  </Page>
</template>

<script>
import firebase from 'nativescript-plugin-firebase/app';
// import firebase from '../../dist/node_modules/nativescript-plugin-firebase/app/firestore';

export default {
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    setData() {

    },
    pushData() {

    },
    getData() {
      var cityRef = firebase.collection('users').doc('r0D24G2I5OlxFtXDA21P');
      var getDoc = cityRef.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            console.log('Document data:', doc.data());
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
        });
    }
  }
};
</script>

<style scoped>
.hello-world {
  margin: 20;
}

label {
  color: red;
}
</style>
