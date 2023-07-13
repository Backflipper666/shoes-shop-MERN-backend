/* eslint-disable */
export type Schema = {
  'images': {
    plain: {
      '_id': string;
    };
    nested: {};
    flat: {};
  };
  'posts': {
    plain: {
      '_id': string;
    };
    nested: {};
    flat: {};
  };
  'shoes': {
    plain: {
      'title': string;
      'description': string;
      'brand': string;
      'price': number;
      'color': string;
      'rating': number;
      'gender': string;
      'onSale': boolean;
      'discountPercent': number;
      'newCollection': boolean;
      'season': string;
      'createdAt': string;
      '_id': string;
      'stock@@@colors@@@grey@@@sizes@@@36': number;
      'stock@@@colors@@@red@@@sizes@@@37': number;
      'image@@@data': string;
      'image@@@contentType': string;
      'image2@@@data': string;
      'image2@@@contentType': string;
      'image3@@@data': string;
      'image3@@@contentType': string;
      'image4@@@data': string;
      'image4@@@contentType': string;
    };
    nested: {};
    flat: {};
  };
  'shoes_reviews': {
    plain: {
      'username': string;
      'comment': string;
      '_id': string;
      'parentId': string;
    };
    nested: {
      'parent': Schema['shoes']['plain'] & Schema['shoes']['nested'];
    };
    flat: {
      'parent:title': string;
      'parent:description': string;
      'parent:brand': string;
      'parent:price': number;
      'parent:color': string;
      'parent:rating': number;
      'parent:gender': string;
      'parent:onSale': boolean;
      'parent:discountPercent': number;
      'parent:newCollection': boolean;
      'parent:season': string;
      'parent:createdAt': string;
      'parent:_id': string;
      'parent:stock@@@colors@@@grey@@@sizes@@@36': number;
      'parent:stock@@@colors@@@red@@@sizes@@@37': number;
      'parent:image@@@data': string;
      'parent:image@@@contentType': string;
      'parent:image2@@@data': string;
      'parent:image2@@@contentType': string;
      'parent:image3@@@data': string;
      'parent:image3@@@contentType': string;
      'parent:image4@@@data': string;
      'parent:image4@@@contentType': string;
    };
  };
  'sneakers': {
    plain: {
      'title': string;
      'description': string;
      'brand': string;
      'price': number;
      'color': string;
      'size': number;
      'material': string;
      'stock': any;
      'rating': number;
      'gender': string;
      'onSale': boolean;
      'discountPercent': number;
      'newCollection': boolean;
      'season': string;
      'createdAt': string;
      '_id': string;
      'image@@@data': string;
      'image@@@contentType': string;
      'image2@@@data': string;
      'image2@@@contentType': string;
      'image3@@@data': string;
      'image3@@@contentType': string;
      'image4@@@data': string;
      'image4@@@contentType': string;
    };
    nested: {};
    flat: {};
  };
  'sneakers_reviews': {
    plain: {
      'username': string;
      'comment': string;
      '_id': string;
      'parentId': string;
    };
    nested: {
      'parent': Schema['sneakers']['plain'] & Schema['sneakers']['nested'];
    };
    flat: {
      'parent:title': string;
      'parent:description': string;
      'parent:brand': string;
      'parent:price': number;
      'parent:color': string;
      'parent:size': number;
      'parent:material': string;
      'parent:stock': any;
      'parent:rating': number;
      'parent:gender': string;
      'parent:onSale': boolean;
      'parent:discountPercent': number;
      'parent:newCollection': boolean;
      'parent:season': string;
      'parent:createdAt': string;
      'parent:_id': string;
      'parent:image@@@data': string;
      'parent:image@@@contentType': string;
      'parent:image2@@@data': string;
      'parent:image2@@@contentType': string;
      'parent:image3@@@data': string;
      'parent:image3@@@contentType': string;
      'parent:image4@@@data': string;
      'parent:image4@@@contentType': string;
    };
  };
  'users': {
    plain: {
      'email': string;
      'password': string;
      '_id': string;
    };
    nested: {};
    flat: {};
  };
  'users_favorites': {
    plain: {
      'content': string;
      '_id': string;
      'parentId': string;
    };
    nested: {
      'content__manyToOne': Schema['sneakers']['plain'] & Schema['sneakers']['nested'];
      'parent': Schema['users']['plain'] & Schema['users']['nested'];
    };
    flat: {
      'content__manyToOne:title': string;
      'content__manyToOne:description': string;
      'content__manyToOne:brand': string;
      'content__manyToOne:price': number;
      'content__manyToOne:color': string;
      'content__manyToOne:size': number;
      'content__manyToOne:material': string;
      'content__manyToOne:stock': any;
      'content__manyToOne:rating': number;
      'content__manyToOne:gender': string;
      'content__manyToOne:onSale': boolean;
      'content__manyToOne:discountPercent': number;
      'content__manyToOne:newCollection': boolean;
      'content__manyToOne:season': string;
      'content__manyToOne:createdAt': string;
      'content__manyToOne:_id': string;
      'content__manyToOne:image@@@data': string;
      'content__manyToOne:image@@@contentType': string;
      'content__manyToOne:image2@@@data': string;
      'content__manyToOne:image2@@@contentType': string;
      'content__manyToOne:image3@@@data': string;
      'content__manyToOne:image3@@@contentType': string;
      'content__manyToOne:image4@@@data': string;
      'content__manyToOne:image4@@@contentType': string;
      'parent:email': string;
      'parent:password': string;
      'parent:_id': string;
    };
  };
};
