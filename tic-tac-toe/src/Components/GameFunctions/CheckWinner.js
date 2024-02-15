export const checkWinner = (list) => {
  // eslint-disable-next-line default-case
  if (list[0][0] === list[0][1] && list[0][1] === list[0][2]) return list[0][0];
  else if (list[1][0] === list[1][1] && list[1][1] === list[1][2])
    return list[1][0];
  else if (list[2][0] === list[2][1] && list[2][1] === list[2][2])
    return list[2][0];
  else if (list[0][0] === list[1][0] && list[1][0] === list[2][0])
    return list[0][0];
  else if (list[0][1] === list[1][1] && list[1][1] === list[2][1])
    return list[0][1];
  else if (list[0][2] === list[1][2] && list[1][2] === list[2][2])
    return list[0][2];
  else if (list[0][0] === list[1][1] && list[1][1] === list[2][2])
    return list[0][0];
  else if (list[0][2] === list[1][1] && list[1][1] === list[2][0])
    return list[0][2];
};
