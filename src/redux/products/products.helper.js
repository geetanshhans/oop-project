import { firestore } from "../../firebase/firebase.utils";


export const handleAddProduct = product => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc()
      .set(product)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleFetchProducts = ({ filterType }) => {
    return new Promise((resolve,reject) => {
        
        let collectionRef = firestore.collection('products');
        if(filterType){
            collectionRef = collectionRef.where('productCategory' , '==' , filterType);
        }
        collectionRef
            .get()
            .then(snapshot => {
                const productsArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID : doc.id
                    }
                });
                resolve(productsArray);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleDeleteProduct = documentID => {
    return new Promise ((resolve,reject) => {
        firestore
            .collection('products')
            .doc(documentID)
            .delete()
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
              })
    })
}

export const handleFetchProduct = productID => {
    return new Promise ((resolve,reject) => {
        firestore
            .collection('products')
            .doc(productID)
            .get()
            .then(snapshot => {
                if(snapshot.exists){
                    console.log(snapshot.data());
                    resolve(snapshot.data());
                }
            })
            .catch(err => {
                reject(err);
            })
    })
}