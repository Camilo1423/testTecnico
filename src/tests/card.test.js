const card = require ('../components/Card');

test('el id de producto debe ser mayor a 0', () => {
    expect(card.idProducto).toBeGreaterThan(0);
})

