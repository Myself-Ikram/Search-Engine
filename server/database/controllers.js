import { companies, ads } from "./data.js";
import Ads from "./am.js";
import Companies from "./cm.js";

//companies
export async function getCompanies(req, res) {
  try {
    const c = await Companies.find();
    res.json(c);
  } catch (error) {
    res.json({ error });
  }
}
export async function insertCompanies(req, res) {
  try {
    if ((await Companies.find()).length === 0) {
      await Companies.insertMany(companies, function (err, data) {
        res.json({ msg: "Inserted Successfully" });
      });
    } else {
      res.json({ msg: "Data is alresdy inserted" });
    }
  } catch (error) {
    res.json({ error });
  }
}
export async function deleteCompanies(req, res) {
  try {
    await Companies.deleteMany();
    res.json({ msg: "Deleted Successfully" });
  } catch (error) {
    res.json({ error });
  }
}
//Ads
export async function getAds(req, res) {
  try {
    const a = await Ads.find();
    res.json(a);
  } catch (error) {
    res.json({ error });
  }
}
export async function insertAds(req, res) {
  try {
    if ((await Ads.find()).length === 0) {
      await Ads.insertMany(ads, function (err, data) {
        res.json({ msg: "Inserted Successfully" });
      });
    } else {
      res.json({ msg: "Data is alresdy inserted" });
    }
  } catch (error) {
    res.json({ error });
  }
}
export async function deleteAds(req, res) {
  try {
    await Ads.deleteMany();
    res.json({ msg: "Successfully deleted results" });
  } catch (error) {
    res.json({ error });
  }
}
