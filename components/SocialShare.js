import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'next-share';

function SocialShare({ page }) {
  return (
    <div>
      <div>
        <h5>Share the wisdom</h5>
        <FacebookShareButton
          url={`https://muslim-insight.netlify.app/blog/${page}`}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <PinterestShareButton
          url={`https://muslim-insight.netlify.app/blog/${page}`}
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        <RedditShareButton
          url={`https://muslim-insight.netlify.app/blog/${page}`}
        >
          <RedditIcon size={32} round />
        </RedditShareButton>
        <WhatsappShareButton
          url={`https://muslim-insight.netlify.app/blog/${page}`}
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton
          url={`https://muslim-insight.netlify.app/blog/${page}`}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
}

export default SocialShare;
