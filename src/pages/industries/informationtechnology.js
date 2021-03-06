import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
import OtherStaticPagesRow from '../../components/OtherStaticPagesRow'
import IndustriesKeyNotes from '../../components/IndustriesKeyNotes'
import TextContents from '../../TextContents';
import Information_Tech_Banner from '../../img/Roshan_Mansoor_Information_Technology_Banner.png'
import Retail_Tile from '../../img/Roshan_Mansoor_Retail_Tile.png'
import Manufacturing_Tile from '../../img/Roshan_Mansoor_Manufacturing_Tile.png'
import Real_Estate_Tile from '../../img/Roshan_Mansoor_Real_Estate_Tile.png'

export const InformationTechnologyPage = () => {
  return (
    <Layout>
    <div className="bg-darkgray">
    <Container fluid={true} className="px-0">
      <Card className="bg-dark text-white text-center">
        <Card.Img 
        className="hidden-sm-down"
        src={Information_Tech_Banner} 
        alt="Card image" />
        <Card.Img 
        className="hidden-sm-up"
        src={Information_Tech_Banner} 
        alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="page-image-card-header"><h1>Information Technology</h1></Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Container>
    <Container className="mt-3 pb-5">
      <Row className="mx-1 mx-sm-0">
        <Col>
        <Breadcrumb>
          <Link to="/">Home&nbsp;></Link> 
          <Link to="/industries"> &nbsp;Industries</Link>
        </Breadcrumb>
        </Col>
      </Row>
      <Row className="mx-1 mx-sm-0 bg-white">        
        <Col className="py-5 px-sm-5">
          <h2 className="my-3">
            {TextContents.industries_information_tech.information_technology}
          </h2>
          <p className="text-secondary">
          {TextContents.industries_information_tech.text1}
          </p>
          <br/>
          <p className="text-secondary">
          {TextContents.industries_information_tech.text2}
          </p>
        </Col>
      </Row>
    </Container>
    </div>
    <OtherStaticPagesRow
      mainHeader="OTHER INDUSTRIES YOU MAY LIKE"
      link1="/industries/realestate"
      link2="/industries/manufacturing"
      link3="/industries/retail"
      cardHeader1="REAL ESTATE ENGINEERING & CONSTRUCTION"
      cardHeader2="Manufacturing"
      cardHeader3="RETAIL"
      cardText1="Engineering and construction companies have a need for on-going audits to ascertain all aspects of internal operations meet the standards set by the statutory bodies. We understand this and have dedicated re- sources catering to the needs of this industry..."
      cardText2="We undertake financial manage- ment for business operating in diverse industries. Our goal is to provide effective solutions that enable our clients to to accom- plish their objectives..."
      cardText3="Retail industry has gone through enormous changes after E-Com- merce disrupted the industry as a whole, which enabled as to in- troduce better ERP system with our clients which results in better accounting system, financial
      and tax planning and better management of cash flow..."
      cardImage1={Real_Estate_Tile}
      cardImage2={Manufacturing_Tile}
      cardImage3={Retail_Tile}
    />
    </Layout>
  )
}

export default InformationTechnologyPage

