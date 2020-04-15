import { useEffect, useState } from 'react';
import { isEqual } from 'lodash';
import axios from 'axios';

const INITIAL_PARAM = {
  page: 1,
  height: null,
  width: null,
  grayscale: null,
  blur: null,
};

const useApiData = () => {
  const [images, setImages] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [heights, setHeights] = useState(null);
  const [widths, setWidths] = useState(null);
  const [params, setParams] = useState(INITIAL_PARAM);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    axios.get('/api/pics', { params }).then((response) => {
      setImages(response.data);
      setTotalPages(response.data.total_pages);
      if (!heights && !widths) {
        buildSizes(response.data.data);
      }
      setDataLoading(false);
    });
  }, [params]);

  const handleGrayscale = () => {
    if (params.grayscale == null) {
      setParams({ ...params, grayscale: 2 });
    } else {
      setParams({ ...params, grayscale: null });
    }
  };

  const handleBlur = () => {
    if (params.blur == null) {
      setParams({ ...params, blur: 2 });
    } else {
      setParams({ ...params, blur: null });
    }
  };

  const handlePageChange = (e, data) => {
    setParams({ ...params, page: data.activePage });
  };

  const buildSizes = (imageData) => {
    const allHeights = _.uniq(
      imageData.reduce((accum, image) => {
        return [...accum, image.height];
      }, []),
    );
    const allWidths = _.uniq(
      imageData.reduce((accum, image) => {
        return [...accum, image.width];
      }, []),
    );
    setHeights(allHeights);
    setWidths(allWidths);
  };

  const handleParams = ({ target: { dataset } }) => {
    const paramName = dataset.param;
    const paramValue = parseInt(dataset.value);
    setParams({ ...params, [paramName]: paramValue });
  };

  const handleClear = () => {
    setParams({ ...INITIAL_PARAM });
  };

  const heightFilterText = () => (params.height ? `Height ${params.height}px` : 'Height');

  const widthFilterText = () => (params.width ? `Width ${params.width}px` : 'Width');

  const showClearButton = () => !isEqual(params, INITIAL_PARAM);

  const showPageSwitcher = () => !!images;

  return {
    handleBlur,
    handleGrayscale,
    handlePageChange,
    handleParams,
    totalPages,
    heights,
    widths,
    images,
    handleClear,
    params,
    dataLoading,
    showPageSwitcher: showPageSwitcher(),
    showClearButton: showClearButton(),
    heightFilterText: heightFilterText(),
    widthFilterText: widthFilterText(),
  };
};

export { useApiData };
