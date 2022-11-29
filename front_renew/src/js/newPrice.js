const newCaclulateStoreFee = (storeType, storeValue, boxsize) => {
  let oneDayStorePrice = 0;
  let monthStoreprice = 0;
  if (storeType === "pallet") {
    oneDayStorePrice = 600;
    //파레트일떄 월보관료
    console.log(`caclulateStoreFee ${monthStoreprice}`);
    return (monthStoreprice = storeValue * oneDayStorePrice * 30);
  } else if (storeType === "box") {
    console.log("hello box!!");
    let boxcount = 70;
    if (boxsize === null) {
      console.log("설마여기로들어오나?");
      return;
    }
    let covnvertToPlt = Math.floor(storeValue / boxcount);
    oneDayStorePrice = 600;
    //박스일때 월보관료
    console.log(storeValue);
    console.log(covnvertToPlt);
    console.log(
      `caclulateStoreFee when Box ${covnvertToPlt * oneDayStorePrice * 30}`
    );
    return (monthStoreprice = covnvertToPlt * oneDayStorePrice * 30);
  }
};

const newCacluateDeliveryFee = (
  monthDeliveryCount,
  outputBoxSize,
  outputType
) => {
  let deliveryFeeBySize = 0;
  let packingFee = 0;
  let monthDeliveryFee = 0;
  if (outputBoxSize === null) {
    return;
  }
  deliveryFeeBySize = 2900;

  if (outputType === "total_packaing") {
    packingFee = 400;
  } else {
    packingFee = 300;
  }

  return (monthDeliveryFee =
    (deliveryFeeBySize + packingFee) * monthDeliveryCount);
};

//wms이용료

const newCaclutateWMSfee = (skuCount) => {
  let wmsFee = 100000;
  return wmsFee;
};

export { newCaclulateStoreFee, newCacluateDeliveryFee, newCaclutateWMSfee };
