#version 300 es
// vertex.glsl - from the OpenGL SuperBible Sixth Edition

void main(void)
{
    // a triangle
    const vec4 vertices[3] = vec4[3](
        vec4(0.25, -0.5, 0.5, 1.0),
        vec4(-0.25, -0.5, 0.5, 1.0),
        vec4(0.0, 0.5, 0.5, 1.0)
    );

    gl_Position = vertices[gl_VertexID];
}