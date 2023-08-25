
export const fetchInstance = async () => {
  const api = "https://api.storyblok.com/v2/cdn/stories";
  const params = {
    token:process.env.DB_TOKEN,
    version: "draft"
}
  const res = await fetch(`${api}?${params}`)
  const {repo} = await res.json();
  return repo; 
}

export const fetchAllPosts = async () => {
 try {
    const {allpost} = await fetchInstance();
    return allpost;
} catch(error) {console.log(error)}

}