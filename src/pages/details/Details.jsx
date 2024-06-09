import React from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Img from '../../components/lazyLoadImage/Img'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendations'

function Details() {
  const  {mediaType,id} = useParams()
const {data,loading} =  useFetch(`/${mediaType}/${id}/videos`)
const {data:credits,loading: creditsLoading} =  useFetch(`/${mediaType}/${id}/credits`)
  return (
    // <div>
       <ContentWrapper>
        <DetailsBanner video={data?.results[0]} crew={credits?.crew}/>
        <Cast data={credits?.cast} loading={creditsLoading}/>
        <VideosSection data={data} loading={creditsLoading}/>
        <Similar mediaType={mediaType} id={id}/>
        <Recommendation mediaType={mediaType} id={id}/>
       </ContentWrapper>
    // </div>
  )
}

export default Details