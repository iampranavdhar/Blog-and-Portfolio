import graphene
from graphene_django import DjangoObjectType
from database.models import Post,Project

class PostType(DjangoObjectType):
    class Meta:
        model = Post
        fields = '__all__'

class ProjectType(DjangoObjectType):
    class Meta:
        model=Project
        fields='__all__'

class Query(graphene.ObjectType):

    # Posts-Schema
    all_posts = graphene.List(PostType)
    post_by_title= graphene.Field(PostType, title=graphene.String(required=True))
    post_by_id = graphene.Field(PostType,id=graphene.Int(required=True))
    
    def resolve_all_posts(root, info):
        # We can easily optimize query count in the resolve method
        return Post.objects.all()

    def resolve_post_by_title(root, info, title):
        try:
            return Post.objects.get(title=title)
        except Post.DoesNotExist:
            return None
    def resolve_post_by_id(root, info, id):
        try:
            return Post.objects.get(id=id)
        except Post.DoesNotExist:
            return None
    
    #Projects-Schema
    all_projects = graphene.List(ProjectType)

    def resolve_all_projects(root,info):
        return Project.objects.all()

schema = graphene.Schema(query=Query)