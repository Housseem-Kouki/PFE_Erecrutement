<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Agent;
use App\Entity\Candidat;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry ,private UserPasswordEncoderInterface $passwordEncoder  )
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(UserInterface $user, string $newEncodedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newEncodedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }

    // /**
    //  * @return User[] Returns an array of User objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */


    
    public function create($data){
        $roles[]='ROLE_USER';
        $user = new User();
        $user->setNom($data->nom);
        $user->setPrenom($data->prenom);
        $user->setEmail($data->email);
        $user->setTel($data->tel);
        $user->setCivilite($data->civilite);
        $user->setDaten(new \DateTime());
        $user->setRoles($roles);
        $password = $this->passwordEncoder->encodePassword($user,$data->password);
        $user->setPassword($password);
        $this->_em->persist($user);
        $this->_em->flush();

        $candidat= new Candidat();
        $candidat->setUser($user);
        $this->_em->persist($candidat);
        $this->_em->flush();

        return $user ; 

    }

    public function createAgent($data){
        $roles[]='ROLE_AGENT';
        $user = new User();
        $user->setNom($data->nom);
        $user->setPrenom($data->prenom);
        $user->setEmail($data->email);
        $user->setTel($data->tel);
        $user->setCivilite($data->civilite);
        $user->setDaten(new \DateTime());
        $user->setRoles($roles);
        $password = $this->passwordEncoder->encodePassword($user,$data->password);
        $user->setPassword($password);
        $this->_em->persist($user);
        $this->_em->flush();

        $agent= new Agent();
        $agent->setUser($user);
        $this->_em->persist($agent);
        $this->_em->flush();
        return $user ; 

    }
}
