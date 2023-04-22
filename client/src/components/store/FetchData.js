import { useEffect, useState } from "react";
import { getServerData } from "./helper";
import { useDispatch } from "react-redux";
import { getData } from "./dataSlice";
import { getAds } from "./adsSlice";
function FetchData() {
  const dispatch = useDispatch();
  const [d, setD] = useState({
    com: "",
    ad: "",
  });
  useEffect(() => {
    (async () => {
      try {
        let a = await getServerData("http://localhost:5000/api/companies");
        let b = await getServerData("http://localhost:5000/api/ads");
        if (a.length > 0 && b.length > 0) {
          setD({
            com: a,
            ad: b,
          });
          dispatch(getData(a));
          dispatch(getAds(b));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);
  return [d, setD];
}

export default FetchData;
