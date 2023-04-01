import { Request, Response, NextFunction } from 'express';
import Post from '../models/Post';
import Section from '../models/Section';
import { SectionBody } from '../types/Section';
import isMongoId from 'validator/lib/isMongoId';

export const HomePage = async (req: Request, res: Response, next: NextFunction) => {
    res.render("home")
}
export const DetailPage = async (req: Request, res: Response, next: NextFunction) => {
    let id = req.params.id
    let embeds = [
        {
            embed: `<script src="https://gist.github.com/kumarnishu/1acfc36f0d11b4ba47da1f50f810c249.js"></script>`,
            paragraph: "Express is a node js web application framework that provides broad features for building web and mobile applications.Express is a node js web application framework that provides broad features for building web and mobile applications."
        },
        {
            embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zxqSrQYNcG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
            paragraph: "Express is a node js web application framework that provides broad features for building web and mobile applications.Express is a node js web application framework that provides broad features for building web and mobile applications."
        },
        {
            embed: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fraashiikhanna%2Fposts%2Fpfbid02JGMbjFvunseBbujusWRMivQXLMChV7ziJPkeYR5Yd2VVDxasQx2V4FRzhAz8xYVDl&show_text=true&width=500" width="500" height="590" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
            paragraph: "jsdusdlsdusdsdsduso"
        }
    ]
    const sections = [
        {
            image: '/images/post-image.jpg'
        },
        {
            paragraph: "Prevent long strings of text from breaking your components’ layout by using .text-break to set word-wrap: break-word and word-break: break-word. We use word-wrap instead of the more common overflow-wrap for wider browser support, and add the deprecated word-break: break-word to avoid issues with flex containers."
        },
        {
            audio: `/audio/let-it-go-12279.mp3`,

        },
        {
            video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        },

        {
            embed: embeds[0].embed

        }
    ]
    const context = {
        title: "How to write an Express App",
        subtitle: "Express is a node js web application framework that provides broad features for building web and mobile applications.Express is a node js web application framework that provides broad features for building web and mobile applications.",
        sections: sections
    }
    res.render("post-detail", context)
}

export const NewPost = async (req: Request, res: Response, next: NextFunction) => {
    const post = new Post({
        updated_at: new Date(Date.now()),
        author: req.user
    })
    await post.save()
    res.status(201).json(post)
}
export const CreateSection = async (req: Request, res: Response, next: NextFunction) => {
    const { type, value } = req.body as SectionBody
    if (!type || !value)
        return res.status(400).json({ "message": "fill all required fields" })
    const post_id = req.params.id
    if (!post_id)
        return res.status(400).json({ "message": "please provide valid post id" })
    if (!isMongoId(post_id))
        return res.status(400).json({ "message": "not a valid post id" })
    const post = await Post.findById(post_id)
    if (!post)
        return res.status(400).json({ "message": "this post not exists" })
    const section = new Section({
        type: type,
        value: value,
        updated_at: new Date(Date.now()),
        post: post
    })
    section.author=req.user
    await section.save()
    res.status(201).json(section)
}
