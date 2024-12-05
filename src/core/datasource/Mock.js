import Datasource from "./Datasource";

export default class Mock extends Datasource {
  instance = null;

  constructor() {
    if (Mock.instance) {
      return Mock.instance;
    }
    super();
    Mock.instance = this;
  }

  getRecommendations() {
    return [
      {
        id: "upper",
        name: "Prendas superiores",
        products: [
          {
            name: "Producto",
            price: 10000,
            discount: 0.5,
            thubmnail:
              "https://hmcolombia.vtexassets.com/arquivos/ids/3675203-483-725?v=638511011914100000&width=483&height=725&aspect=true",
            id: 1,
          },
          {
            name: "Producto 2",
            price: 10000,
            discount: 0.5,
            thubmnail:
              "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
            id: 2,
          },
          {
            name: "Producto 3",
            price: 10000,
            discount: 0.5,
            thubmnail:
              "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
            id: 3,
          },
          {
            name: "Producto 4",
            price: 10000,
            discount: 0.5,
            thubmnail:
              "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
            id: 4,
          },
        ],
      },
      {
        id: "bottom",
        name: "Prendas inferiores",
        products: [
          {
            name: "Producto 5",
            price: 10000,
            thubmnail:
              "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
            id: 4,
          },
          {
            name: "Producto 6",
            price: 10000,
            discount: 0,
            thubmnail:
              "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
            id: 5,
          },
          {
            name: "Producto 6",
            price: 10000,
            discount: 0,
            thubmnail:
              "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
            id: 6,
          },
          {
            name: "Producto 7",
            price: 10000,
            discount: 0,
            thubmnail:
              "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
            id: 7,
          },
        ],
      },
    ];
  }
  getProducts() {
    return [
      {
        name: "Producto",
        price: 10000,
        discount: 0.5,
        size: "XS",
        notAvailables:["M", "L"],
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675203-483-725?v=638511011914100000&width=483&height=725&aspect=true",
        id: 1,
      },
      {
        name: "Producto 2",
        price: 10000,
        discount: 0.5,
        size: "M",
        notAvailables:["XS", "L"],
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
        id: 2,
      },
      {
        name: "Producto 3",
        price: 10000,
        discount: 0.5,
        size: "M",
        notAvailables:["XS", "S"],
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
        id: 3,
      },
      {
        name: "Producto 4",
        price: 10000,
        discount: 0.5,
        size: "M",
        notAvailables:["XS", "S"],
        thubmnail:
          "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
        id: 4,
      },
    ];
  }
}
