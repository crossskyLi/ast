(function () {
  const recast = require('recast');
  const code = `
    function foo (a,b){
      return a + b;
    }
  `;
  const ast = recast.parse(code);
  const add = ast.program.body[0];

  console.log('add', JSON.stringify(add));
})()