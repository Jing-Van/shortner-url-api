import Model from '../models/model';
const validUrlCustomized = require('../utils/validator').validUrl

const shortid = require("shortid");
const validUrl = require("valid-url");

const urlsModel = new Model('urls');

export const urlsPage = async (req, res) => {
  try {
    const data = await urlsModel.select('id, shortened_url, original_url');
    //const data = await urlsModel.select('id');
    res.status(200).json({ urls: data.rows });
  } catch (err) {
    res.status(200).json({ urls: err.stack });
  }
};

export const addUrl = async (req, res) => {
  const {original_url} = req.body;

  let url = `'${original_url}'`;
  const columns = 'shortened_url, original_url';

  console.log('original url')
  console.log(url)

  var http = /^https?:\/\//i
  if (!http.test(url)) {
    url = 'http://' + url
  }

  if (!validUrlCustomized(url)) {
    return res.send('Unsupported link')
  }

  if(!validUrl.isUri(url)){
    res.status(400).json("Invalid URL. Please enter a vlaid url for shortening.");
  }

  const urlCode = shortid.generate();
  const shortUrl = "http://localhost:3000/v1" + "/" + urlCode;



  const values = `'${shortUrl}', '${original_url}'`;

  try {
    const data = await urlsModel.insertWithReturn(columns, values);
    res.status(200).json({ urls: data.rows });
  } catch (err) {
    res.status(200).json({ urls: err.stack });
  }
};