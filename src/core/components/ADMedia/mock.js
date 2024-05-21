export class Mock {
  abort = () => {};
  getProducts = () => {
    return [
      {
        discount: {
          percentage: "50%",
          before: 1000000,
          now: 500000
        },
        id: 1,
        name: "Vestido",
        price: "150000000",
        sizes: ["M", "S", "XS", "L"],
        images: [
          {
            id: 1,
            productId: 1,
            description: "test",
            selected: true,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675203-483-725?v=638511011914100000&width=483&height=725&aspect=true",
          },
          {
            id: 2,
            productId: 1,
            description: "test2",
            selected: false,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
          },
          {
            id: 3,
            description: "test3",
            productId: 1,
            selected: false,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675230/Vestido-linea-A-en-tejido-fino---Crema-Negro---H-M-CO.jpg?v=638511012049670000",
          },
        ],
        thumbnails: [
          {
            id: 1,
            description: "test",
            productId: 1,
            belongsTo: 1,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675203-483-725?v=638511011914100000&width=483&height=725&aspect=true",
          },
          {
            id: 2,
            description: "test2",
            belongsTo: 2,
            productId: 1,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
          },
          {
            id: 3,
            description: "test3",
            belongsTo: 3,
            productId: 1,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675230/Vestido-linea-A-en-tejido-fino---Crema-Negro---H-M-CO.jpg?v=638511012049670000",
          },
        ],
      },
    ];
  };
}
