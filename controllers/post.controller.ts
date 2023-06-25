import { Request, Response, NextFunction } from 'express';
import Post from '../models/Post';
import Section from '../models/Section';
import { SectionBody } from '../types/Section';
import isMongoId from 'validator/lib/isMongoId';

export const NewPost = async (req: Request, res: Response, next: NextFunction) => {
    const post = new Post({
        updated_at: new Date(Date.now()),
        author: req.user
    })
    await post.save()
    res.status(201).json(post)
}
export const CreateSection = async (req: Request, res: Response, next: NextFunction) => {
    const { type, value, prev_section_id } = req.body as SectionBody & { prev_section_id: String }
    if (!type || !value)
        return res.status(400).json({ "message": "fill all required fields" })
    if (prev_section_id)
        if (!isMongoId(String(prev_section_id)))
            return res.status(400).json({ "message": "please provide valid previous section id" })
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
    await section.save()
    let sections = post.sections
    let prevSectionIndex: undefined | number = undefined
    sections.map((item, index) => {
        if (String(item._id) === String(prev_section_id))
            prevSectionIndex = index
    })
    if (prevSectionIndex)
        sections.splice(prevSectionIndex + 1, 0, section)
    else
        sections.push(section)
    await Post.findByIdAndUpdate(post_id, { sections: sections })
    res.status(201).json(post)
}
