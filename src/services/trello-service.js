export default class TrelloService {
  data = [
    {
      id: 1,
      name: "Tasks",
      cards: [
        {
          name: "Monday",
          items: ["get to work", "clean house"]
        },
        {
          name: "Friday",
          items: ["go shopping", "go to gym"]
        }
      ]
    },
    {
      id: 2,
      name: "Home work",
      cards: [
        {
          name: "Monday",
          items: ["get to work", "clean house"]
        },
        {
          name: "Friday",
          items: ["go shopping", "go to gym"]
        }
      ]
    }
  ];

  getDesks = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  };
}
