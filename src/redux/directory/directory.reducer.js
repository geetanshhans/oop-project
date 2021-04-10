const INITIAL_STATE = {
    sections: [
      {
        title: "fruits",
        imageUrl: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80ttps://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/fruits",
      },
      {
        title: "vegetables",
        imageUrl: "https://images.unsplash.com/photo-1557844352-761f2565b576?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        id: 2,
        linkUrl: "shop/vegetables",
      },
      {
        title: "dairy products",
        imageUrl: "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
        id: 3,
        linkUrl: "shop/dairy-products",
      },
      {
        title: "Beverages",
        imageUrl: "https://images.unsplash.com/photo-1502389743708-d00f658638bd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGNvbGQlMjBkcmluayUyMGJvdHRsZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60ps://images.unsplash.com/photo-1583722276128-f1af40cf5834?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=694&q=80https://images.unsplash.com/photo-1578844687747-e2c1d9605256?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        size: "large",
        id: 4,
        linkUrl: "shop/beverages",
      },
      {
        title: "snacks",
        imageUrl: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        size: "large",
        id: 5,
        linkUrl: "shop/snacks",
      },
    ],
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;
  