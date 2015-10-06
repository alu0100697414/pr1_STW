var assert = chai.assert;

suite('Temperatura', function() {
    test('32F == 0C', function() {
        insert.value = "32F";
        conversor();
        assert.deepEqual(resultado.innerHTML, "El resultado es: 0 C");
    });
    test('45C == 113 F', function() {
        insert.value = "45C";
        conversor();
        assert.deepEqual(resultado.innerHTML, "El resultado es: 113 F");
    });
    test('5X = error', function() {
        insert.value = "5X";
        conversor();
        assert.match(resultado.innerHTML, /ERROR/);
    });
});
