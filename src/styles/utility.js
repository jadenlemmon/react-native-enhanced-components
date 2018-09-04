const obj = {};

for (let i = 0; i < 100; i += 1) {
  obj[`m${i}`] = {
    margin: i,
  };
  obj[`mt${i}`] = {
    marginTop: i,
  };
  obj[`mb${i}`] = {
    marginBottom: i,
  };
  obj[`ml${i}`] = {
    marginLeft: i,
  };
  obj[`mr${i}`] = {
    marginRight: i,
  };
  obj[`p${i}`] = {
    padding: i,
  };
  obj[`pt${i}`] = {
    paddingTop: i,
  };
  obj[`pb${i}`] = {
    paddingBottom: i,
  };
  obj[`pl${i}`] = {
    paddingLeft: i,
  };
  obj[`pr${i}`] = {
    paddingRight: i,
  };
}

export default {
  ...obj,
  overflowHidden: {
    overflow: 'hidden',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
};
