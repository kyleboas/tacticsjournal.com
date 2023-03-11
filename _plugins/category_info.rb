module Jekyll
  class CategoryInfo < Liquid::Tag
    def initialize(tag_name, category_name, tokens)
      super
      @category_name = category_name.strip
    end

    def render(context)
      category = context.registers[:site].categories[@category_name]
      count = category.size
      last_post_date = category.docs.map(&:date).max
      last_post_date_formatted = last_post_date.strftime("%A, %B %-d, %Y")
      category_url = context.registers[:site].config['url'] + "/category/#{@category_name}/"
      "<a href='#{category_url}'>#{@category_name} (#{count} posts)</a> last post #{last_post_date_formatted}"
    end
  end
end

Liquid::Template.register_tag('category_info', Jekyll::CategoryInfo)
