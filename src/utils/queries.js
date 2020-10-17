export const createUrlTable = `
DROP TABLE IF EXISTS urls;
CREATE TABLE IF NOT EXISTS urls (
  id SERIAL PRIMARY KEY,
  shortened_url VARCHAR DEFAULT '',
  original_url VARCHAR NOT NULL
  )
  `;

export const insertUrls = `
INSERT INTO urls(shortened_url, original_url)
VALUES ('http://shorten.io/jing3', 'http://jingwebsite.com'),
      ('http://shorten.io/sY4', 'http://somewebsite.com')
`;

export const dropUrlsTable = 'DROP TABLE urls';
