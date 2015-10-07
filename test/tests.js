var assert = chai.assert;

suite('Test de conversor de temperatura', function() {
    // Compruebo que el resultado es de tipo String
    test('Resultado == String', function() {
        insert.value = "-54.23F";
        conversor();
        assert.isString(resultado.innerHTML);
    });
    // Compruebo que el resultado no es de tipo Number
    test('Resultado != Number', function() {
        insert.value = "-54.23F";
        conversor();
        assert.isNotNumber(resultado.innerHTML);
    });
    test('32F == 0C', function() {
        insert.value = "32F";
        conversor();
        assert.deepEqual(resultado.innerHTML, "El resultado es: 0 C");
    });
    test('45C == 113F', function() {
        insert.value = "45C";
        conversor();
        assert.deepEqual(resultado.innerHTML, "El resultado es: 113 F");
    });
    test('54.23C == 129.61F', function() {
        insert.value = "54.23C";
        conversor();
        assert.deepEqual(resultado.innerHTML, "El resultado es: 129.61 F");
    });
    test('-54.23F == -47.91C', function() {
        insert.value = "-54.23F";
        conversor();
        assert.deepEqual(resultado.innerHTML, "El resultado es: -47.91 C");
    });
    // assert.match usa una expresion regular
    test('5X = ERROR', function() {
        insert.value = "5X";
        conversor();
        assert.match(resultado.innerHTML, /no es correcto/);
    });
});
