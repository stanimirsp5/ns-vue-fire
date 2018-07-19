<template>
  <Page class="page">
    <ActionBar class="action-bar"
      title="DATABASE">
      <NavigationButton text="Go Back"
        android.systemIcon="ic_menu_back"
        @tap="$router.push('/home')" />
    </ActionBar>

    <StackLayout class="hello-world">
      <Label class="body"
        textWrap=true
        text="This is a hello world component, tap the button if you dare" />

      <Button class="btn btn-primary"
        @tap="setData"
        text="set!" />
      <Button class="btn btn-primary"
        @tap="getData"
        text="get" />
      <Button class="btn btn-primary"
        @tap="pushData"
        text="pushData" />

    </StackLayout>

  </Page>
</template>

<script>
import firebase from 'nativescript-plugin-firebase';

export default {
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    setData() {
      firebase.init();
      firebase.setValue(
        '/vuef-78044',
        [
          { name: 'Telerik', country: 'Bulgaria' },
          { name: 'Google', country: 'USA' }
        ]
      );
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS")
    },
    pushData() {
      console.log("PUSHHHHHHHHHHHHHHHHHHH");
      firebase.push(
        '/vuef-78044',
        {
          'first': 'Eddy',
          'last': 'Verbruggen',
          'birthYear': 1977,
          'isMale': true,
          'address': {
            'street': 'foostreet',
            'number': 123
          }
        }
      ).then(
        function (result) {
          console.log("created key: " + result.key);
        }
      ).catch(error => console.log("Error: " + error));
    },
    getData() {
      // firebase.init().then(() => {    //try to run init() first
      console.log("CITY REFFFFFFFFFFFFFFFFFFFF");
      firebase.getValue('/vuef-78044')
        .then(result => console.log(JSON.stringify(result)))
        .catch(error => console.log("Error: " + error))
      // });
      // let users = firebase.firestore().collection('users');
      // console.log(users);
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
