const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const projects = document.querySelector('#projects');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');
const projectsContent = document.querySelector('#projects-content');

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });
});

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });
});

projects.addEventListener('click', () => {
  const projectsBox = new WinBox({
    title: 'Recent Projects',
    width: '600px',
    height: '400px',
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
    mount: projectsContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });
});
