import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import PRODUCTS_API from "../../api/products";
import Dashboard from "../../components/Dashboard";
import mockProducts from "../../mock/products";
import { setProductList } from "../../redux/products/actions";
import { getProductsList } from "../../redux/products/selectors";
import { IProduct } from "../../redux/products/state";

const DashboardView = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsList);

  const getProducts = useCallback(() => {
    PRODUCTS_API.getProducts(10)
      .then((response) => {
        if (response) dispatch(setProductList(response.data));
      })
      .catch((error) => {
        console.log(error);
        // in case API doesn't work
        dispatch(setProductList(mockProducts as IProduct[]));
      });
  }, [dispatch]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return <Dashboard products={products} />;
};

export default DashboardView;
