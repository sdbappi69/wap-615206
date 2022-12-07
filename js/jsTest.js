describe("Sum and Multiply", function(){
    it("Sum of the elements of an array", function(){
        assert.equal(sum([5,6]), 11);
    });

    it("Multiply of the elements of an array", function(){
        assert.equal(multiply([5,6]), 30);
    });
});

describe("Reverse", function(){
    it("Reverse of a string", function(){
        assert.equal(reverse('Hello World'), 'dlroW olleH');
    });    
});

describe("Filter Long Words", function () {
    it("Filter long words", function () {
        assert.deepEqual(filterLongWords(["hello", "world", "hi"], 2), ["hello", "world"]);
    });
});
