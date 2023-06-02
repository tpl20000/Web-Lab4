describe('New Arrivals Component Test', function() {

  let component;

  before(async () => {
    component = await browser.mountVueComponent('/src/components/new-arrivals/NewArrivals.vue', {
      plugins: {
        store: '/src/lib/store.js',
        router: '/src/lib/router.js'
      },

      mocks: {
        '/data/new-arrivals.json': {
          type: 'fetch',
          body: {
            books: [
              {
                "title": "Полиция памяти",
                "author": "Ёко Огава",
                "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544335119l/37004370.jpg",
                "price": 140.72,
                "currency": "₽",
                "category": "Научная фантастика > Дистопия",
                "isbn13": 9781101911815,
                "description": "На безымянном острове исчезают предметы: сначала шляпы, затем ленты, птицы, розы..."
              }
            ]
          }
        }
      }
    })
  });

  it('tests the component', function(browser) {
    // const newArrivalsValue = await component.getProperty('newArrivals');
    // console.log('newArrivals', newArrivalsValue)

    expect(component).to.be.visible;
    expect(component).to.have.property('newArrivals');

    expect(component).text.toContain('Полиция памяти')

    expect(component.findAll('div.col-md-6')).length(1);

    expect(component.property('newArrivals')).to.be.an('array').with.length(1);
  });

  it('logs the innerHTML property', async function(browser) {
    const innerHTML = await browser.getElementProperty(component, 'innerHTML');
    browser.assert.textContains(component, 'Полиция памяти');
  });
});
