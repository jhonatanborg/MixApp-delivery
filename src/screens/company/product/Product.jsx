import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import styles from "./Product.style";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as saleActions from "../../../store/actions/saleActions";
import * as companyActions from "../../../store/actions/companyActions";
import Icon from "@expo/vector-icons/Entypo";
import getEnvVars from "../../../../environment";
import { convertMoney } from "../../../utils";
const { BASE_URL } = getEnvVars();

import { PRODUCT } from "../../../services/api";
import BottomBar from "../../../components/molecules/BottomBar/BottomBar";
import ModalSale from "../../../components/molecules/ModalSale/ModalSale";
import ListComplements from "../../../components/organisms/ListComplements/ListComplements";
const Product = (props) => {
  const [complements, setComplements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [listanova, setListaNova] = useState([]);
  const [total, setTotal] = useState(props.route.params.product.sale_value);
  const [totalComplements, setTotalComplements] = useState(0);
  const [companyId, setCompanyId] = useState(props.route.params.company.id);
  const [newSale, setNewSale] = useState(null);
  useEffect(() => {
    async function fetchComplements() {
      const response = await PRODUCT.getComplements(
        props.route.params.product.object_id
      );
      setComplements(response.data.childs);
      setProduct(response.data.product);
      setTotal(response.data.product.sale_value);
    }
    fetchComplements();
  }, []);
  function AddQuantityItem() {
    const newQtd = quantity + 1;
    setQuantity(newQtd);
    const newTotal =
      parseFloat(product.sale_value) * newQtd +
      parseFloat(totalComplements) * newQtd;
    setTotal(newTotal);
  }
  function DecraseQuantityItem() {
    const newQtd = quantity > 1 ? quantity - 1 : 1;
    setQuantity(newQtd);
    const newTotal = newQtd * parseFloat(total);
    setTotal(newTotal);
  }

  function AddMountComplements(complement, category, limit) {
    let lista = listanova;
    let findedCategory = listanova[category];
    if (findedCategory) {
      const findexIndex = findedCategory.findIndex(
        (item) => item && item.id === complement.id
      );
      if (
        findexIndex >= 0 &&
        findedCategory.limite > 0 &&
        findedCategory.allQtd < findedCategory.limite
      ) {
        findedCategory[findexIndex].qtd++;
        findedCategory.allQtd++;
        const newTotalComplements =
          totalComplements + Number(complement.sale_value);
        setTotalComplements(newTotalComplements);
        const newTotal =
          parseFloat(product.sale_value) * quantity +
          parseFloat(newTotalComplements) * quantity;
        setTotal(newTotal);
      } else if (findedCategory.allQtd < findedCategory.limite) {
        complement.qtd = 1;
        findedCategory.push(complement);
        findedCategory.allQtd++;
        const newTotalComplements =
          totalComplements + Number(complement.sale_value);
        setTotalComplements(newTotalComplements);
        const newTotal =
          parseFloat(product.sale_value) * quantity +
          parseFloat(newTotalComplements) * quantity;
        setTotal(newTotal);
      }
    } else {
      complement.qtd = 1;
      findedCategory = [complement];
      findedCategory.limite = limit === 0 ? 9999 : limit;
      findedCategory.allQtd = 1;
      const newTotalComplements =
        totalComplements + Number(complement.sale_value);
      setTotalComplements(newTotalComplements);
      const newTotal =
        parseFloat(product.sale_value) * quantity +
        parseFloat(newTotalComplements) * quantity;
      setTotal(newTotal);
    }
    lista[category] = findedCategory;
    setListaNova(lista);
    const newListaNova = [];
    Object.keys(listanova).forEach((key) => {
      if (listanova[key].allQtd > 0) {
        newListaNova[key] = listanova[key];
      }
    });
    setListaNova(newListaNova);
  }
  function RemoveMountComplements(complement, category) {
    let lista = listanova;
    if (lista[category]) {
      const findexIndex = lista[category].findIndex(
        (item) => item && item.id === complement.id
      );

      if (findexIndex >= 0) {
        lista[category][findexIndex].qtd--;
        lista[category].allQtd--;
        const sale_value = Number(listanova[category][findexIndex].sale_value);
        const newTotal = parseFloat(total) - parseFloat(sale_value);
        setTotal(newTotal);
        const newTotalComplements = totalComplements - Number(sale_value);
        setTotalComplements(newTotalComplements);
        if (lista[category][findexIndex].qtd <= 0) {
          lista[category].splice(findexIndex, 1);
        }
        const newListaNova = [];
        if (lista[category].allQtd <= 0) {
          Object.keys(lista).forEach((key) => {
            if (lista[key].allQtd > 0) {
              newListaNova[key] = lista[key];
            }
          });
          setListaNova(newListaNova);
        }
      }
    }
  }
  function addSale() {
    let objectChilds = [];
    if (complements.length > 0) {
      complements.forEach((category) => {
        if (listanova[category.name]) {
          listanova[category.name].forEach((complement) => {
            objectChilds.push({
              product_id: complement.id,
              product_qtd: complement.qtd,
              cashback_return: complement.cashback_return,
              product_name: complement.name,
              total: complement.sale_value,
              sale_type_id: 1,
              company_id: companyId,
            });
          });
        }
      });
    }
    let sale = {
      product_id: product.id,
      product_qtd: quantity,
      product_name: product.name,
      img: product.img,
      total: total,
      cashback_return: product.cashback_return,
      sale_type_id: 1,
      company_id: companyId,
      childs: objectChilds,
      comment: "oba",
      company_name: props.route.params.company.name,
    };
    const verifySale = props.sale.every(
      (item) => item.company_id === sale.company_id
    );
    if (verifySale) {
      props.addItem({ type: "ADD_ITEM_SALE", sale });
      props.setCompanySale({ ...props.route.params.company });
    } else {
      setModalVisible(true);
      setNewSale(sale);
    }
  }
  function emptySale() {
    props.resetSale(newSale);
    setModalVisible(false);
  }

  return (
    <>
      <ScrollView>
        <ImageBackground
          style={styles.image}
          source={{ uri: `${BASE_URL + props.route.params.product.img}` }}
        >
          <View style={styles.overlay}>
            <View style={styles.headerTop}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={props.onPress}
              >
                <AntDesign name="left" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <View style={{ width: "80%", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                ></View>
              </View>
              <View>
                <Icon name="heart" color="#f9dd7a" size={30} />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.details}>
          <View style={styles.content}>
            <Text numberOfLines={2} style={styles.title}>
              {product.name}
            </Text>
            <Text style={styles.price}>{convertMoney(product.sale_value)}</Text>
          </View>
          <View>
            <Text style={styles.text}>{product.description}</Text>
          </View>
        </View>

        <ListComplements
          onPress={(item, category, limit) =>
            AddMountComplements(item, category, limit)
          }
          removeComplements={RemoveMountComplements}
          complements={complements}
        />
      </ScrollView>
      <BottomBar
        AddQuantity={AddQuantityItem}
        DecraseQuantity={DecraseQuantityItem}
        total={total}
        quantity={quantity}
        onPress={addSale}
      />
      <ModalSale
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        resetSale={() => emptySale()}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    sale: state.sale,
    company: state.company,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...saleActions, ...companyActions }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Product);
