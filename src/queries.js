// Fetching all services
export const servicesQuery = `*[_type == "services"] | order(_createdAt asc){
    _id,
    title,
    description,
    imageUrl,
    badgeIconUrl,
    badgeText,
    button,
  }`;
  
  
  // Fetching all work highlights
  export const workHighlightQuery = `*[_type == "workHighlight"] | order(_createdAt asc) {
    _id,
    title,
    tags,
    liveLink,
    projectImageUrl,
    projectIcon,
    feedback,
    clientName,
    clientTitle,
    clientImageUrl
  }`;
  