import { $authHost, $host } from './index';

export const createRealty = async (realtyData) => {
  const { data } = await $authHost.post('api/realty', realtyData);
  return data;
};

export const requestRealties = async (page, limit) => {
  const { data } = await $host.get('api/realty', { params: { page, limit } });
  return data;
};

export const requestOneRealty = async (id) => {
  const { data } = await $host.get(`api/realty/${id}`);
  return data;
};

export const deleteRealty = async (id) => {
  const { data } = await $authHost.delete(`api/realty/${id}`);
  return data;
};

// Добавление функции для загрузки нескольких изображений недвижимости
export const uploadRealtyImages = async (realtyId, images) => {
  const formData = new FormData();
  console.log(images);
  images.forEach((image) => {
    formData.append('images', image);
  });

  const { data } = await $authHost.post(`api/realty/${realtyId}/images`, formData);
  return data;
};
