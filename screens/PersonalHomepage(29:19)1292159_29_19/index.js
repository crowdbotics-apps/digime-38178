import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b88626c-b02d-4b90-92f3-17da5474e60e"
        }}
        style={styles.ImageBackground_37_10}
      />
      <View style={styles.View_42_74} />
      <View style={styles.View_64_27}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3dd0b41-9efb-413a-ac61-3278bfe514d0"
          }}
          style={styles.ImageBackground_64_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60d31feb-95a9-40f7-86b7-600a24323167"
          }}
          style={styles.ImageBackground_64_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7b2bfc2-7052-42da-ba9e-58be6420cccc"
          }}
          style={styles.ImageBackground_64_30}
        />
      </View>
      <View style={styles.View_42_75}>
        <Text style={styles.Text_42_75}>Shane Mensah</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_42_76}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("42_67"))
        }
      />
      <View style={styles.View_50_18} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/396b64f5-e030-44cf-984d-23d4f831a0a3"
        }}
        style={styles.ImageBackground_50_20}
      />
      <View style={styles.View_50_17}>
        <Text style={styles.Text_50_17}>My DigiMe ID</Text>
      </View>
      <View style={styles.View_50_19}>
        <Text style={styles.Text_50_19}>Scan DigiMe ID</Text>
      </View>
      <View style={styles.View_50_13}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2476afd-1757-4a86-8fd4-40ab0c2fa25a"
          }}
          style={styles.ImageBackground_50_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e449161e-b242-45d3-953f-783f6892c841"
          }}
          style={styles.ImageBackground_50_15}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4d16eaa-4062-430c-b39d-677e803290e8"
          }}
          style={styles.ImageBackground_50_16}
        />
      </View>
      <View style={styles.View_42_77} />
      <View style={styles.View_57_5} />
      <View style={styles.View_57_7} />
      <View style={styles.View_57_8} />
      <View style={styles.View_57_6}>
        <Text style={styles.Text_57_6}>My Info</Text>
      </View>
      <View style={styles.View_57_9}>
        <Text style={styles.Text_57_9}>Socials</Text>
      </View>
      <View style={styles.View_57_10}>
        <Text style={styles.Text_57_10}>Contacts</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d21568f-c8b9-4879-b6ad-d1bef69c5363"
        }}
        style={styles.ImageBackground_57_11}
      />
      <View style={styles.View_57_13}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4a0e0bf-b263-4998-b531-9e38d25d60c7"
          }}
          style={styles.ImageBackground_57_14}
        />
      </View>
      <View style={styles.View_57_18}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81c80ce0-80c1-43c6-b73d-4b4f59cf33c7"
          }}
          style={styles.ImageBackground_57_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98fc5978-2780-4bcf-b93d-102c0bdba3e2"
          }}
          style={styles.ImageBackground_57_20}
        />
        <View style={styles.View_57_21} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/488e1981-6091-41be-a953-79a847116822"
        }}
        style={styles.ImageBackground_57_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bf15919-1f94-4397-819a-39f919c61da5"
        }}
        style={styles.ImageBackground_57_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9f435fd-e25d-4a4c-b65f-0ee7846f287b"
        }}
        style={styles.ImageBackground_57_25}
      />
      <View style={styles.View_57_33}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5c77154-b20f-4eff-b939-140878d32159"
          }}
          style={styles.ImageBackground_57_34}
        />
        <View style={styles.View_57_35} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e181b415-92ad-4b06-bf2f-02450b8698eb"
          }}
          style={styles.ImageBackground_57_36}
        />
      </View>
      <View style={styles.View_58_6} />
      <View style={styles.View_58_8}>
        <Text style={styles.Text_58_8}>DigiMe</Text>
      </View>
      <View style={styles.View_58_9} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31fa21f1-5f71-45f0-ba7b-13bcdc6aeeeb"
        }}
        style={styles.ImageBackground_58_30}
      />
      <View style={styles.View_64_34} />
      <View style={styles.View_64_37} />
      <View style={styles.View_64_38} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  ImageBackground_37_10: {
    width: wp("214%"),
    minWidth: wp("214%"),
    height: hp("159%"),
    minHeight: hp("159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-33%"),
    resizeMode: "cover"
  },
  View_42_74: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.44999998807907104
  },
  View_64_27: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_64_28: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_64_29: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  ImageBackground_64_30: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  View_42_75: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_42_75: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_42_76: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("61%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_50_18: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("61%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_50_20: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  View_50_17: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_50_17: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_19: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_50_19: {
    color: "rgba(147, 149, 164, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_13: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_50_14: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_50_15: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_50_16: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_42_77: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_57_5: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("85%"),
    backgroundColor: "rgba(255, 184, 0, 1)"
  },
  View_57_7: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("97%"),
    backgroundColor: "rgba(255, 184, 0, 1)"
  },
  View_57_8: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("109%"),
    backgroundColor: "rgba(255, 184, 0, 1)"
  },
  View_57_6: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_57_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_9: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_57_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_10: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_57_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_11: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("111%")
  },
  View_57_13: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_57_14: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_57_18: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_57_19: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_57_20: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_57_21: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2
  },
  ImageBackground_57_23: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("86%")
  },
  ImageBackground_57_24: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("98%")
  },
  ImageBackground_57_25: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("110%")
  },
  View_57_33: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_57_34: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_57_35: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2
  },
  ImageBackground_57_36: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_58_6: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("35%"),
    backgroundColor: "rgba(255, 184, 0, 1)",
    opacity: 0.5
  },
  View_58_8: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_58_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_58_9: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("39%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.699999988079071
  },
  ImageBackground_58_30: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  View_64_34: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.25
  },
  View_64_37: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.25
  },
  View_64_38: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.25
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
