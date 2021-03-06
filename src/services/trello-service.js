export default class TrelloService {
  maxId = 100;
  data = [
    {
      id: 1,
      name: "Tasks",
      cards: [
        {
          id: 1,
          name: "Monday",
          items: ["get to work", "clean house"]
        },
        {
          id: 2,
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
          id: 1,
          name: "Monday",
          items: ["get to work", "clean house"]
        },
        {
          id: 2,
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

  getDesk = id => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data.find(desk => desk.id === id));
      }, 100);
    });
  };

  createDesk = name => {
    return new Promise(resolve => {
      setTimeout(() => {
        const desk = {
          id: this.maxId++,
          name: name,
          cards: []
        };
        //this.data.push(desk); тут надо как-то менять data
        resolve(desk);
      }, 100);
    });
  };
}
