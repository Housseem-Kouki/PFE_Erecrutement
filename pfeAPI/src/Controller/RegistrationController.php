<?php

namespace App\Controller;

use App\Repository\CandidatRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class RegistrationController extends AbstractController
{
    public function __construct(private UserRepository $userRepository,private Security $security)
    {
        
    }
    
    /**
    * @Route("/api/inscription", name="api_user_regester", methods="POST")
    */
    public function app(Request $request , SerializerInterface $serializer): JsonResponse
    {
        $jsonData = json_decode($request->getContent());

        $user = $this->userRepository->create($jsonData);
        
        $json = $serializer->serialize($user, 'json', [
            'groups' => 'user:read'
            ]);
            return new JsonResponse($json, 200, [], true);
            

    }

    /**
    * @Route("/api/inscritAgent", name="api_agent_regester", methods="POST")
    */
    public function inscritAgent(Request $request , SerializerInterface $serializer): JsonResponse
    {
        $jsonData = json_decode($request->getContent());

        $user = $this->userRepository->createAgent($jsonData);
        
        $json = $serializer->serialize($user, 'json', [
            'groups' => 'user:read'
            ]);
            return new JsonResponse($json, 200, [], true);
            

    }

      /**
    * @Route("/api/candidatUser/user", name="api_candidatUser", methods="GET")
    */
    public function candidatUser(Request $request,  SerializerInterface $serializer ,CandidatRepository $candidatRepository): JsonResponse
    {
       $user = $request->getContent();
         $candidat = $candidatRepository->findOneBy(['user' => $user]);
            
        $json = $serializer->serialize($candidat, 'json');
        return new JsonResponse($json, 200, [], true);
        }  
}
