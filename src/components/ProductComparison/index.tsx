import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Button, MenuItem, Select } from "@mui/material";

import { getOrderList } from "../../redux/orders/selectors";
import { IOrder } from "../../redux/orders/state";
import CompareChart from "../charts/CompareChart";

import styles from "./styles.module.css";

const ProductComparison = () => {
  const [selectedProducts, setSelectedProducts] = useState({
    product1: "",
    product2: "",
  });
  const [product1Data, setProduct1Data] = useState<IOrder[]>();
  const [product2Data, setProduct2Data] = useState<IOrder[]>();
  const [combinedData, setCombinedData] = useState<IOrder[]>();

  const salesData = useSelector(getOrderList);

  const titlesArray = useMemo(
    () => salesData?.map((item) => item.title),
    [salesData],
  );

  const handleProductChange = (productKey, selectedProduct) => {
    setSelectedProducts((prevSelectedProducts) => ({
      ...prevSelectedProducts,
      [productKey]: selectedProduct,
    }));
  };

  const handleCompareClick = () => {
    const newProduct1Data = salesData?.filter(
      (item) => item.title === selectedProducts.product1,
    );
    const newProduct2Data = salesData?.filter(
      (item) => item.title === selectedProducts.product2,
    );

    if (newProduct1Data && newProduct2Data) {
      const combinedData = [...newProduct1Data, ...newProduct2Data];

      setProduct1Data(newProduct1Data);
      setProduct2Data(newProduct2Data);
      setCombinedData(combinedData);
    }
  };

  const calculateTotalUnitSold = (productData) =>
    productData?.reduce((acc, val) => acc + val.unitSold, 0);

  const product1TotalUnitSold = useMemo(
    () => calculateTotalUnitSold(product1Data),
    [product1Data],
  );
  const product2TotalUnitSold = useMemo(
    () => calculateTotalUnitSold(product2Data),
    [product2Data],
  );

  const disableSubmitBtn =
    !selectedProducts.product1 || !selectedProducts.product2;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Compare two products by unit solds
      </h2>
      <div className={styles.container}>
        <Select
          className={styles.select}
          value={selectedProducts.product1}
          label="Product 1"
          onChange={(event) =>
            handleProductChange("product1", event.target.value)
          }
        >
          {titlesArray?.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>

        <Select
          className={styles.select}
          value={selectedProducts.product2}
          label="Product 2"
          onChange={(event) =>
            handleProductChange("product2", event.target.value)
          }
        >
          {titlesArray
            ?.filter((item) => item !== selectedProducts.product1)
            .map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>

        <Button
          disabled={disableSubmitBtn}
          variant="contained"
          color="primary"
          onClick={handleCompareClick}
        >
          Compare
        </Button>
      </div>
      {product1TotalUnitSold &&
      product2TotalUnitSold &&
      combinedData?.length ? (
        <CompareChart
          product1={selectedProducts.product1}
          product2={selectedProducts.product2}
          data={combinedData.map((item) => ({ date: item.date }))}
          product1Sale={[product1TotalUnitSold]}
          product2Sale={[product2TotalUnitSold]}
        />
      ) : null}
    </>
  );
};

export default ProductComparison;
