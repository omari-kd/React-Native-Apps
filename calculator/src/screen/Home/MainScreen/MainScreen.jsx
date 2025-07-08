import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");
const isPortrait = height > width;
export default function MainScreen() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isNextValue, setIsNextValue] = useState(false);

  const handlePress = (value) => {
    if (isNextValue) {
      setDisplayValue(value);
      setIsNextValue(false);
    } else {
      setDisplayValue(displayValue === "0" ? value : displayValue + value);
    }
  };

  const handleOperatorPress = (op) => {
    setFirstValue(parseFloat(displayValue));
    setOperator(op);
    setIsNextValue(true);
  };

  const handleEqualPress = () => {
    const secondValue = parseFloat(displayValue);
    let result;

    switch (operator) {
      case "+":
        result = firstValue + secondValue;
        break;
      case "-":
        result = firstValue - secondValue;
        break;
      case "x":
        result = firstValue * secondValue;
        break;
      case "/":
        result = firstValue / secondValue;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setFirstValue(null);
    setOperator(null);
    setIsNextValue(true);
  };

  const handleClear = () => {
    setDisplayValue("0");
    setFirstValue(null);
    setOperator(null);
    setIsNextValue(false);
  };

  const handlePlusMinus = () => {
    setDisplayValue((prevValue) =>
      prevValue[0] === "-" ? prevValue.slice(1) : "-" + prevValue
    );
  };

  const handlePercent = () => {
    setDisplayValue((parseFloat(displayValue) / 100).toString());
  };

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />

      {/*Calculator Screen */}
      <View style={styles.calculatorScreen}>
        <Text style={styles.answerText}>{displayValue}</Text>
      </View>

      {/* Buttons */}

      <View style={styles.buttonContainer}>
        {/* Row 1 */}
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.buttons} onPress={handleClear}>
            <Text style={styles.buttonsText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={handlePlusMinus}>
            <Text style={styles.buttonsText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={handlePercent}>
            <Text style={styles.buttonsText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons1}
            onPress={() => handleOperatorPress("/")}
          >
            <Text style={styles.buttonsText1}>/</Text>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.buttons2}
            onPress={() => handlePress("7")}
          >
            <Text style={styles.buttonsText2}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons2}
            onPress={() => handlePress("8")}
          >
            <Text style={styles.buttonsText2}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons2}
            onPress={() => handlePress("9")}
          >
            <Text style={styles.buttonsText2}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons1}
            onPress={() => handleOperatorPress("x")}
          >
            <Text style={styles.buttonsText1}>x</Text>
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.buttons2}
            onPress={() => handlePress("4")}
          >
            <Text style={styles.buttonsText2}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons2}
            onPress={() => handlePress("5")}
          >
            <Text style={styles.buttonsText2}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons2}
            onPress={() => handlePress("6")}
          >
            <Text style={styles.buttonsText2}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons1}
            onPress={() => handleOperatorPress("+")}
          >
            <Text style={styles.buttonsText1}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Row 4 */}
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.buttons2}
            onPress={() => handlePress("1")}
          >
            <Text style={styles.buttonsText2}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons2}
            onPress={() => handlePress("2")}
          >
            <Text style={styles.buttonsText2}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons2}
            onPress={() => handlePress("3")}
          >
            <Text style={styles.buttonsText2}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons1}
            onPress={() => handleOperatorPress("-")}
          >
            <Text style={styles.buttonsText1}>-</Text>
          </TouchableOpacity>
        </View>

        {/* Row 5 */}
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.buttons0}
            onPress={() => handlePress("0")}
          >
            <Text style={styles.buttonsText0}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons2}
            onPress={() => handlePress(".")}
          >
            <Text style={styles.buttonsText2}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons1} onPress={handleEqualPress}>
            <Text style={styles.buttonsText1}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end"
  },
  calculatorScreen: {
    width: "100%",
    height: isPortrait ? hp("30%") : hp("20%"),
    justifyContent: "flex-end",
    paddingBottom: hp("2%")
  },
  answerText: {
    color: "white",
    fontSize: isPortrait ? wp("15%") : hp("10%"),
    textAlign: "right",
    paddingHorizontal: wp("5%"),
    numberOfLines: 1,
    adjustsFontSizeToFit: true,
    minimumFontScale: 0.5
  },
  buttonContainer: {
    padding: wp("2%"),
    gap: isPortrait ? hp("1%") : wp("1%")
  },
  buttons: {
    backgroundColor: "lightgray",
    width: isPortrait ? wp("22%") : hp("15%"),
    height: isPortrait ? wp("22%") : hp("15%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000
  },
  buttonsText: {
    color: "black",
    fontSize: isPortrait ? wp("7%") : hp("5%"),
    fontWeight: "bold"
  },
  buttons1: {
    backgroundColor: "#007FFF",
    width: isPortrait ? wp("22%") : hp("15%"),
    height: isPortrait ? wp("22%") : hp("15%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000
  },
  buttonsText1: {
    color: "white",
    fontSize: isPortrait ? wp("10%") : hp("7%"),
    fontWeight: "bold"
  },
  buttons2: {
    backgroundColor: "gray",
    width: isPortrait ? wp("22%") : hp("15%"),
    height: isPortrait ? wp("22%") : hp("15%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000
  },
  buttonsText2: {
    color: "white",
    fontSize: isPortrait ? wp("8%") : hp("6%"),
    fontWeight: "bold"
  },
  buttons0: {
    backgroundColor: "gray",
    width: isPortrait ? wp("47%") : hp("32%"),
    height: isPortrait ? wp("22%") : hp("15%"),
    justifyContent: "center",
    borderRadius: 1000,
    paddingLeft: isPortrait ? wp("5%") : hp("3%")
  },
  buttonsText0: {
    color: "white",
    fontSize: isPortrait ? wp("8%") : hp("6%"),
    fontWeight: "bold"
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: isPortrait ? hp("1%") : wp("1%")
  }
});
