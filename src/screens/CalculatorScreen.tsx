import React, { useRef, useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { styles } from "../theme/AppTheme";
import { ButtonCalculator } from "../components/ButtonCalculator";
import { useCalculator } from "../hooks/useCalculator";

export const CalculatorScreen = () => {
  const {
    number,
    numberPrevius,
    clean,
    createNamber,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnAdd,
    btnSubtract,
    calcular,
    positiveNegative,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {numberPrevius !== "0" ? (
        <Text style={styles.smallResult} numberOfLines={1} adjustsFontSizeToFit>
          {numberPrevius}
        </Text>
      ) : (
        ""
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalculator text="C" color="#9B9B9B" action={clean} />
        <ButtonCalculator
          text="+/-"
          color="#9B9B9B"
          action={positiveNegative}
        />
        <ButtonCalculator text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalculator text="/" color="#FF9427" action={btnDivide} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="7" action={createNamber} />
        <ButtonCalculator text="8" action={createNamber} />
        <ButtonCalculator text="9" action={createNamber} />
        <ButtonCalculator text="X" color="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="4" action={createNamber} />
        <ButtonCalculator text="5" action={createNamber} />
        <ButtonCalculator text="6" action={createNamber} />
        <ButtonCalculator text="-" color="#FF9427" action={btnSubtract} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="1" action={createNamber} />
        <ButtonCalculator text="2" action={createNamber} />
        <ButtonCalculator text="3" action={createNamber} />
        <ButtonCalculator text="+" color="#FF9427" action={btnAdd} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="0" witdh action={createNamber} />
        <ButtonCalculator text="." action={createNamber} />
        <ButtonCalculator text="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};
