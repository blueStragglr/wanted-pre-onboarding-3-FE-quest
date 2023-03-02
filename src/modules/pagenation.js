const PAGE1 = "pagenation/PAGE1";
const PAGE2 = "pagenation/PAGE2";
const PAGE3 = "pagenation/PAGE3";

export const page1 = () => ({ type: PAGE1 });
export const page2 = () => ({ type: PAGE2 });
export const page3 = () => ({ type: PAGE3 });

const initialState = {
  page1: true,
  page2: false,
  page3: false,
};

export default function pagenation(state = initialState, action) {
  switch (action.type) {
    case PAGE1:
      return {
        page2: false,
        page3: false,
        page1: true,
      };
    case PAGE2:
      return {
        page2: true,
        page3: false,
        page1: false,
      };
    case PAGE3:
      return {
        page2: false,
        page3: true,
        page1: false,
      };
    default:
      return state;
  }
}
