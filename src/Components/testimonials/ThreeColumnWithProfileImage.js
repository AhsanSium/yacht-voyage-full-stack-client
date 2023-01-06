import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "../misc/Layouts.js";
import { SectionHeading as Heading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-8.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import axios from 'axios';
import loadingImg from '../../images/loading2.gif';

const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 sm:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-40 h-40 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

export default ({
  subheading = "Review Section",
  heading = "Customer's Review",
  loading, setLoading
},
) => {

  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // setYacht({loading:true})
      setLoading(true);

      const result = await axios(
        'https://yacht-voyage-server.onrender.com/customer-reviews',
      );

      setTestimonialsData(result && result.data);
      // console.log(result&&result.data);
      setLoading(false);
    };

    fetchData();
  }, [setTestimonialsData]);

  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {
          loading ?
            <div>
              <img style={{ width: '40%', textAlign: 'center' }} alt="" src={loadingImg} />
            </div>
            :
            <Testimonials>
              {testimonialsData && testimonialsData.map((testimonial) => (
                <TestimonialContainer key={testimonial._id}>
                  <Testimonial>
                    <Image src={`data:image/jpeg;base64,${testimonial.image.img}`} />
                    <Quote>"{testimonial.description}"</Quote>
                    <div>
                      <h4>{testimonial.rating}</h4>
                      <StarIcon />
                    </div>
                    <CustomerName>- {testimonial.name}</CustomerName>
                  </Testimonial>
                </TestimonialContainer>
              ))}
            </Testimonials>
        }
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
