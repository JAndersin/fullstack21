const dummy = (blogs) => {
    return 1
}
  
const totalLikes = (blogs) => {
    sum = blogs.reduce((a, b) => a + b.likes, 0)
    return sum
}

const favoriteBlog = (blogs) => {
    maxLikes = blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog)
    return maxLikes
}

const mostBlogs = (blogs) => {
    m = 0
    mb = 1
    author = ''
    for (var i=0; i<blogs.length; i++) {
        for (var j=i; j<blogs.length; j++) {
            if (blogs[i].author == blogs[j].author)
                m++;
            if (mb<m){
                mb=m; 
                author = blogs[i].author;
            }
        }
        m=0;
    }
    return author
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
  }