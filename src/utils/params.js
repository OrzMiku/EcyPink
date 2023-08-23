import { useRoute } from 'vue-router';

export function getParams() {
  const route = useRoute();
  return route.query;
}

export function isR18() {
  const params = getParams();
  return parseInt(params['r18']) ? true : false;
}
