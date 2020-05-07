import browser from 'webextension-polyfill';

const photos = [
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1553503995-b6aefccad354?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1488409688217-e6053b1e8f42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1520106392146-ef585c111254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1548154049-18dfc3fcb18b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1531616918159-0c11198cd033?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "http://www.trbimg.com/img-5a090285/turbine/sns-dailymeal-1857649-mcdonalds-chicken-nuggets-incident-indiana-111217-20171112",
  },
  {
    src: "https://photos.google.com/photo/AF1QipPejAZHbRyWuVha3lrKNHQ5BpecWSHOYbWgJgzu",
  },
  {
    src: "https://media-cdn.tripadvisor.com/media/photo-s/04/3b/eb/4b/mc-donald-s.jpg",
  },
];


browser.runtime.onInstalled.addListener(async () => {
    browser.storage.sync.set({'photos': photos});
    browser.storage.sync.set({'gameIsOn': true});
    browser.storage.sync.set({'backgroundSrc': photos[0].src});
});
