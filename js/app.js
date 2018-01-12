class App {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._box = [$('#home-box'),$('#we-box'), $('#service-box'), $('#contact-box')];
    this._elements = [$('#home'), $('#we'), $('#service'), $('#contact')];
    this.particle();
  }

  particle() {
    particlesJS.load('particles-js', 'js/particlesjs.json', function() {
      console.log(' loaded');
    });
  }

  loadView(event) {
       
    let thisSelected = id => {
      if(!id) return;

      this._elements.forEach(element => {
        element.getElementsByTagName('img')[id === element.id ? 0 : 1].classList.remove('hide');
        element.getElementsByTagName('img')[id === element.id ? 1 : 0].classList.add('hide');
      });
  
      this._box.forEach(element => {
        if(element.id === (id + '-box'))
          element.classList.remove('hide');
        else
          element.classList.add('hide');
      });
    }
    thisSelected(event.path[1].id);    
  }

}