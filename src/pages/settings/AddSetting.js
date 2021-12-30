import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_AddSetting } from "../../api/ShopService";
import Loader from "../../components/Loader";
import SettingForm from "../../forms/SettingForm";

const AddSetting = () => {
  return (<div></div>);
}

export default AddSetting;