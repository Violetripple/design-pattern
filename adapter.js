function api(x1, x2, x3) {
  console.log(x1 + x2 + x3);
}

const data = {
  a: 1,
  b: 2,
  c: 3
};

function adapterAPI(o) {
  api(o.a, o.b, o.c);
}

adapterAPI(data);
